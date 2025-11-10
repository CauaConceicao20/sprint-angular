export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
  id: Number | String,
  vehicle: String,
  volumetotal: Number | String,
  connected: Number | String,
  softwareUpdates: Number | String,
  img : String
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
