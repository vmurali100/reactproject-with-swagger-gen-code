/**
 * Simple CRUD API
 * A simple CRUD API to manage items
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("DefaultApi", () => {
  let instance: api.DefaultApi
  beforeEach(function() {
    instance = new api.DefaultApi(config)
  });

  test("itemsGet", () => {
    return expect(instance.itemsGet({})).resolves.toBe(null)
  })
  test("itemsIdDelete", () => {
    const id: string = "id_example"
    return expect(instance.itemsIdDelete(id, {})).resolves.toBe(null)
  })
  test("itemsIdGet", () => {
    const id: string = "id_example"
    return expect(instance.itemsIdGet(id, {})).resolves.toBe(null)
  })
  test("itemsIdPut", () => {
    const body: api.Item = undefined
    const id: string = "id_example"
    return expect(instance.itemsIdPut(body, id, {})).resolves.toBe(null)
  })
  test("itemsPost", () => {
    const body: api.Item = undefined
    return expect(instance.itemsPost(body, {})).resolves.toBe(null)
  })
})

