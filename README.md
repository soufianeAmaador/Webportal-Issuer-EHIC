<div align="center">
 <h1>Frontend Issuer EHIC</h1>
 <span><b> Work in progress:  </b></span></a>
 <span><b> Docker implementation need to be added </b></span></a>
 <p>Frontend for the EHIC project: a webportal for an insurance company to issue custom European Health Insurance Card(EHIC) in the form of a verifiable credential to it's clients<p>
</div>

# Running the app locally

Open the terminal in the Angular application and run the following command:

`ng serve`

The webportal will be available at `http://localhost:4200/`

# getting started

Once the webportal is active you will be presented with a welcome page.

![image](https://github.com/soufianeAmaador/Webportal-Issuer-EHIC/assets/70653226/8e88df5a-d4d2-4894-9649-67244fe3eeb5)

After logging in, a token is created in the backend and stored in the browser for each request.
The next page shown is the profile page where all the credentials are shown with the ability to change some attributes and a button that allows you to generate a <b>European Health Insurance Card</b> in the form of a <b>Verifiable Credential</b>.

![image](https://github.com/soufianeAmaador/Webportal-Issuer-EHIC/assets/70653226/8b4c8cda-f53e-47d4-9403-88cac27b4881)

After pressing the button, an issue request is started that triggers a series of events in the backend.
![image](https://github.com/soufianeAmaador/Webportal-Issuer-EHIC/assets/70653226/584cc55d-49c4-4ade-8919-3a8f31605219)

Similar to websites with federated login pages, the web portal navigates to the user's web wallet where the request is made.
After accepting the request, an OpenID-based OIDC4SSI/SIOP information exchange protocol starts.
![image](https://github.com/soufianeAmaador/Webportal-Issuer-EHIC/assets/70653226/744dbb48-554d-466e-af4f-760ef77d4636)
The rest of the process takes place in the [user's web wallet](https://github.com/soufianeAmaador/Webwallet-holder-EHIC).
