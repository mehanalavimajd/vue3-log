import log from "./directives/log.js"

const directives = {
    install(app,o){
        app.directive('log', {
            mounted(el, binding) {
                log(binding.value)
            }
          })
          
    }
}
   
export default directives;