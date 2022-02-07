import {KeycloakService} from "keycloak-angular";

export class AuthService
{
   constructor(private keycloakService: KeycloakService) {
   }
   getLoggedUser()
   {
     try {
       let userDetail = this.keycloakService.getKeycloakInstance().idTokenParsed;
       console.log('User Details: ', userDetail);
       console.log('User Roles: ',this.keycloakService.getUserRoles());
       return userDetail;
     }
     catch (e)
     {
       console.log('Keycloak Exception: ',e);
       return undefined;
     }
   }

   logout()
   {
     this.keycloakService.logout();
   }

   getRoles() : string[]
   {
     return this.keycloakService.getUserRoles();
   }
}
