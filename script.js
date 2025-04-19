class MissingFieldError extends Error {
    constructor(field, message) {
        super(message);
        this.name = "MissingFieldError";
        this.field = field;
    }
}

export function wbu_state_city(options={statesId, citysId}){
    const WB_UTILS_STATES_CITYS = JSON.parse(document.getElementById('wbu_state_city_json').textContent);
    const states = Object.keys(WB_UTILS_STATES_CITYS)

    const statesHolder = document.getElementById(options.statesId);   
    const citysHolder = document.getElementById(options.citysId);
    
    function _state_change(event){
        citysHolder.innerHTML = ""
        const newCitys = Object.values(WB_UTILS_STATES_CITYS)[event.target.selectedIndex]
        for(const city of newCitys){
            citysHolder.insertAdjacentHTML("beforeend", `<option value="${city}">${city}</option>`)
        }
    }


    if (!statesHolder) throw new MissingFieldError("Estados","Informe um id válido para o select estados")
    if (!citysHolder) throw new MissingFieldError("Cidades", "Informe um id válido para o select cidades")

    for(const state of states ){
        statesHolder.insertAdjacentHTML("beforeend", `<option value="${state}">${state}</option>`)
    }

    for(const city of Object.values(WB_UTILS_STATES_CITYS)[0]){
        citysHolder.insertAdjacentHTML("beforeend", `<option value="${city}">${city}</option>`)
    }

    statesHolder.addEventListener('change', _state_change)

    
}


export function wbu_cep_finder(options={cepId, addressId, districtId, cityId, stateId, isSelect}){
    const cepHolder = document.getElementById(options.cepId)
    const addressHolder = document.getElementById(options.addressId)
    const districtHolder = document.getElementById(options.districtId)
    const cityHolder = document.getElementById(options.cityId)
    const stateHolder = document.getElementById(options.stateId)
    let lastCepValue = "";
    if (!cepHolder) throw new MissingFieldError("CEP", "Informe um id válido para o campo cep")
    if (!addressHolder) throw new MissingFieldError("Endereço", "Informe um id válido para o campo endereço")
     
        
    cepHolder.addEventListener("keyup", function(){
        const cep_value = this.value.replace(/\D/g, '');
        if(cep_value.length === 8 && cep_value !== lastCepValue){
            lastCepValue = cep_value;
            fetch("https://viacep.com.br/ws/" + cep_value + "/json/")
            .then(response => {
                if (!response.ok) {
                throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                if (!("erro" in data)){
                addressHolder.value = data.logradouro;
                if(districtHolder){
                    districtHolder.value = data.bairro;
                }
                if(stateHolder){
                    if (!options.isSelect){
                        stateHolder.value = data.uf;
                    }
                    else{
                        stateHolder.value = data.estado
                        stateHolder.dispatchEvent(new Event("change"));
                    } 
                }

                if(cityHolder){
                    cityHolder.value = data.localidade;
                }
           
                } else {
                alert("CEP não encontrado.");
                cepHolder.value = "";
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                alert("Erro ao buscar o CEP.");
            });
        }
    });
    cepHolder.addEventListener("blur", function(){
        lastCepValue = ""
    })
}

