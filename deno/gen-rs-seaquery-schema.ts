import { changeCase } from "adllang_tsdeno/deps.ts";
import { AdlSourceParams } from "adllang_tsdeno/utils/sources.ts";
import { FileWriter, loadDbResources } from "./gen-sqlschema.ts";


export interface GenRustSeaQuerySchemaParams  extends AdlSourceParams {
  outputFile: string
}

/***
 * Generate a db schema for the rust sea query
 * library
 */
export async function genRustSeaQuerySchema(
  params: GenRustSeaQuerySchemaParams,
): Promise<void> {
  const { loadedAdl, dbResources } = await loadDbResources({
    ...params,
  });

  const writer = new FileWriter(params.outputFile, false);
  writer.write('// This file is generated from the schema definition\n');
  writer.write('\n');
  writer.write('use sea_query::Iden;\n');
  writer.write('\n');

  for (const dbt of dbResources.tables) {
    writer.write('#[derive(Iden, Clone, Copy)]\n');
    writer.write(`pub enum ${titleCase(dbt.name)} {\n`);
    writer.write(`    #[iden = "${dbt.name}"]\n`);
    writer.write('    Table,\n');
    for (const c of dbt.fields) {
      writer.write(`    ${titleCase(c.name)},\n`);
    }
    writer.write('}\n\n');
  }

  writer.close();
}


const titleCase = changeCase.pascalCase;
