import axios from 'axios';
import { URLISTCAR } from 'navigation/constants';

class AutosService {
  //   static crearUsuario(data: CrearUsuarioRequestModel): Promise<CrearUsuarioResponseModel> {
  //     return axios
  //       .post(`${process.env.REACT_APP_ONBOARDING_BASE_URL}/prospecto`, data)
  //       .then(response => new Promise(resolve => resolve(response.data)));
  //   }

  //   static crearProspectoGmail(token: string): Promise<CrearUsuarioResponseModel> {
  //     return axios
  //       .post(`${process.env.REACT_APP_ONBOARDING_BASE_URL}/prospecto/gmail`, '', {
  //         headers: {
  //           Authorization: `${token}`,
  //         },
  //       })
  //       .then(response => new Promise(resolve => resolve(response.data)));
  //   }

  //   static actualizarUsuario(idProspecto: string, data: ActualizarUsuarioRequestModel): Promise<CrearUsuarioResponseModel> {
  //     return axios
  //       .put(`${process.env.REACT_APP_ONBOARDING_BASE_URL}/prospecto/${idProspecto}`, data)
  //       .then(response => new Promise(resolve => resolve(response.data)));
  //   }

  static obtenerListadoAutos(): Promise<any> {
    return axios.get(URLISTCAR).then(response => new Promise(resolve => resolve(response.data)));
  }

  //   static generarCodigoConfirmacion(
  //     idProspecto: string,
  //     data: GenerarCodigoConfirmacionRequestModel
  //   ): Promise<GenerarCodigoConfirmacionResponseModel> {
  //     return axios
  //       .post(`${process.env.REACT_APP_ONBOARDING_BASE_URL}/prospecto/${idProspecto}/confirmacion`, data)
  //       .then(response => new Promise(resolve => resolve(response.data)));
  //   }

  //   static validarCodigoConfirmacion(idProspecto: string, codigo: string): Promise<ValidarCodigoConfirmacionResponseModel> {
  //     return axios
  //       .get(`${process.env.REACT_APP_ONBOARDING_BASE_URL}/prospecto/${idProspecto}/confirmacion/${codigo}`)
  //       .then(response => new Promise(resolve => resolve(response.data)));
  //   }

  //   static generarConsentimiento(idProspecto: string, data: ConsentimientoRequestModel): Promise<ConsentimientoResponseModel> {
  //     return axios
  //       .post(`${process.env.REACT_APP_ONBOARDING_BASE_URL}/prospecto/${idProspecto}/consentimiento`, data)
  //       .then(response => new Promise(resolve => resolve(response.data)));
  //   }
}

export default AutosService;
