({
    getLeads : function(component) {
        
/*Declaração de uma variável action que é inicializada com a referência a 
 um método Apex getLeadsNotContacted da classe Apex que está sendo chamada
pelo componente.*/
        var action = component.get("c.getLeadsNotContacted");
/*Configuração do callback para a ação que será executada quando o servidor 
 retornar uma resposta.*/
        	action.setCallback(this, function(response) {
            
        var state = response.getState();
            if (state === "SUCCESS") {
/*Configuração do atributo leads do componente com o valor retornado pela 
 resposta do servidor. */
            component.set("v.leads", response.getReturnValue());
            }
        });
        /*Enfileiramento da ação para execução no servidor.*/
        $A.enqueueAction(action);
    }
   /* 
    updateLeadStatus : function(component, leadId) {
        var action = component.get("c.updateLeadStatus");
        action.setParams({ leadId : leadId });
        return new Promise(function(resolve, reject) {
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    resolve(response.getReturnValue());
                } else {
                    reject(response.getError());
                }
            });
            $A.enqueueAction(action);
        });
    }*/
})
