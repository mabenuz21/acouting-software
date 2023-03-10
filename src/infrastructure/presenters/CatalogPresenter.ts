import { ICatalog } from 'src/domain/model/data/CatalogModel'
import { CatalogResponse } from 'src/application/graphql'

export class CatalogPresenter extends CatalogResponse {
  constructor(catalog: ICatalog) {
    super()
    this.id = catalog.id
    this.name = catalog.name
    this.catalogId = catalog.catalogId
    this.subcatalog = catalog.subCatalog.map(c => ({
      id: c.id,
      name: c.name,
      catalogId: c.catalogId
    }))
  }
}
