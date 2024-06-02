// import {FieldSpecForValidation, validateFields, validateObjectList, validateDataObjectExistence} from "./index.ts"
// import {FieldSpecForValidation} from "./index.ts"

// import {Material} from '../../model/index.ts'
// import {isNonEmptyArray} from "../../utils/validation.ts"
// import{uuidRegex} from "../../utils/validation.ts"
// import {db} from "../../db/db.ts"
// import {HttpError} from "../../utils/error.ts"


// export async function validateMaterialId(material_id: string): Promise<void> {
//   const materialFormatCheck = material_id.match(uuidRegex)
//   const materialTypeExist = await validateDataObjectExistence("material_type", material_id)
//   if (materialFormatCheck === null || !materialTypeExist) {
//     throw new HttpError(400, 'Invalid material id')
//   }
// }


