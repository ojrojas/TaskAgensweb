import { environment } from "src/environments/environment"

const BaseIdentity = environment.BaseUrlIdentityApi;
const BaseAgents = environment.BaseUrlTaskAgentsApi;

export const RouteApiConstantsIdentity = {
    userapplication: {
        login: `${BaseIdentity}login`
    },
    typeuser: {
        getalltypeuser: `${BaseIdentity}getalltypeuser`,
        createtypeuser: `${BaseIdentity}createtypeuser`,
        deletetypeuser: `${BaseIdentity}deletetypeuser`,
        updatetypeuser: `${BaseIdentity}updatetypeuser`
    },
    user: {
        getallusers: `${BaseIdentity}getallusers`,
        createuser: `${BaseIdentity}createuser`,
        deleteuser: `${BaseIdentity}deleteuser`,
        updateuser: `${BaseIdentity}updateuser`,
        getuserbyid: `${BaseIdentity}getuserbyid`
    }
}

export const RouteApiConstantsAgents = {
    activitytask: {
        getallactivitytask: `${BaseAgents}getallactivitytask`,
        createactivitytask: `${BaseAgents}createactivitytask`,
        deleteactivitytask: `${BaseAgents}deleteactivitytask`,
        updateactivitytask: `${BaseAgents}updateactivitytask`,
    },
    typetask: {
        getalltypetask: `${BaseAgents}getalltypetask`,
        createtypetask: `${BaseAgents}createtypetask`,
        deletetypetask: `${BaseAgents}deletetypetask`,
        updatetypetask: `${BaseAgents}updatetypetask`
    },
    taskapplication: {
        createtaskapplication: `${BaseAgents}createtaskapplication`,
        deletetaskapplication: `${BaseAgents}deletetaskapplication`,
        getAlltaskapplication: `${BaseAgents}getAlltaskapplication`,
        gettaskapplicationbyid: `${BaseAgents}gettaskapplicationById`,
        updatetaskapplication: `${BaseAgents}updatetaskapplication`
    }
}