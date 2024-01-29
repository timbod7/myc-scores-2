import { ScopedDecl, texprString } from "@/adl-gen/runtime/adl";
import { typeExprsEqual } from "@/adl-gen/runtime/utils";

import { getValidRegexAnnotation } from "./model/adl-annotations";
import { regexStringFieldFns } from "./model/fields/primitive";
import { FieldFns } from "./model/fields/type";
import { CustomContext } from "./model/veditor/adlfactory";
import { UiFactory } from "./mui/factory";

export function createUiFactory() {
  const factory = new UiFactory();
  factory.addCustomField(regexpFields);
  factory.addCustomField(dbKeyField);
  return factory;
}

function regexpFields(ctx: CustomContext): FieldFns<unknown> | null {
  if (ctx.typeExpr.typeRef.kind === "reference") {
    const decl: ScopedDecl = ctx.declResolver(ctx.typeExpr.typeRef.value);
    if (decl.decl.type_.kind === "type_") {
      if (typeExprsEqual(decl.decl.type_.value.typeExpr, texprString().value)) {
        const regex =  decl.decl && getValidRegexAnnotation(ctx.declResolver, decl.decl.annotations);
        if (regex !== null) {
          return regexStringFieldFns(regex.regex, regex.description, regex.returnGroup);
        }
      }
    }
  }
  return null;
}

function dbKeyField(ctx: CustomContext): FieldFns<unknown> | null {
  if (ctx.typeExpr.typeRef.kind === "reference"
      && ctx.typeExpr.typeRef.value.moduleName == 'common.db'
      && ctx.typeExpr.typeRef.value.name == 'DbKey') {
      return regexStringFieldFns('[A-Z]+-[A-Za-z0-9]', 'a db key', 0); 
  }
  return null;
}
