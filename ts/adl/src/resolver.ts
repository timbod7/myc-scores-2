/* @generated from adl */
import { declResolver, ScopedDecl } from "@adllang/adl-runtime";
import { _AST_MAP as common_db } from "./common/db";
import { _AST_MAP as common_db_api } from "./common/db_api";
import { _AST_MAP as common_http } from "./common/http";
import { _AST_MAP as common_strings } from "./common/strings";
import { _AST_MAP as common_time } from "./common/time";
import { _AST_MAP as common_ui } from "./common/ui";
import { _AST_MAP as mycscores_apis_ui } from "./mycscores/apis/ui";
import { _AST_MAP as mycscores_db } from "./mycscores/db";
import { _AST_MAP as sys_adlast } from "./sys/adlast";
import { _AST_MAP as sys_annotations } from "./sys/annotations";
import { _AST_MAP as sys_types } from "./sys/types";

export const ADL: { [key: string]: ScopedDecl } = {
  ...common_db,
  ...common_db_api,
  ...common_http,
  ...common_strings,
  ...common_time,
  ...common_ui,
  ...mycscores_apis_ui,
  ...mycscores_db,
  ...sys_adlast,
  ...sys_annotations,
  ...sys_types,
};

export const RESOLVER = declResolver(ADL);
