angular.module('app', ['angular.filter'])
    .controller('TablaController', TablaController)
    .filter('suma', SumaEdades)

function TablaController() {
    var vm = this;

    vm.filtraPorNombre = filtraPorNombre;
    vm.filtroSelect = filtroSelect;

    vm.modelSelect;
    vm.filterSelect;

    vm.filtro = {'Todos': true};
    vm.tabla = [
        {
            "nombre": "Pablo",
            "apellido": "A",
            "edad": 24
        },{
            "nombre": "Silvia",
            "apellido": "B",
            "edad": 25
        },{
            "nombre": "Pepe",
            "apellido": "C",
            "edad": 30
        },{
            "nombre": "Pablo",
            "apellido": "D",
            "edad": 20
        }
    ]

    function filtraPorNombre(personas) {
        if(vm.filtro['Todos']){
            return true;
        }
        else{
            return vm.filtro[personas.nombre];
        }
    } 

    function filtroSelect() {
        if(this.modelSelect != null){
            this.filterSelect = this.modelSelect.nombre;
        }
        else{
            this.filterSelect = "";
        }
    } 
}



function SumaEdades() {
    return function(data, key) {
    //   debugger;
      if (angular.isUndefined(data) || angular.isUndefined(key))
        return 0;
      var sum = 0;

      angular.forEach(data, function(v, k) {
        sum = sum + parseInt(v[key]);
      });
      return sum;
    }
  }

