({
    doInit : function(component, event, helper) {
        helper.getLeads(component);
    },
   
    /*
    save : function(component, event, helper) {
    component.find("edit").get("e.recordSave").fire();
}
    doUpdate : function(component, event, helper) {
        var lead = event.getSource().get("v.value");
        var action = component.get("c.updateLeadStatus");
        action.setParams({ leadId : lead.Id });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var leads = component.get("v.leads");
                var index = leads.indexOf(lead);
                leads.splice(index, 1);
                component.set("v.leads", leads);
            }
        });
        $A.enqueueAction(action);
    }*/
})

     

// O método "getLeads" é chamado no helper e recebe o componente como parâmetro.
// Este é o método padrão que é executado quando o componente é inicializado.
