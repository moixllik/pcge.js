// (c) 2022 Irving Montalvo | @moixllik
var diario = []
document.querySelectorAll('pcge, pre.pcge, pre code.language-pcge').forEach(pcge => {
    var asiento = {debe: {}, haber: {}}
    pcge.innerHTML.replace(/[\n|\r]/g, '').split('//').map(tx => {
        var result = {}

        tx.split(';;').forEach(i => {
            var ac = i.split('='), val = ac[1]
                .replace(/%/g,'/100')
                .replace(/d_\w+/g, (w) => "asiento.debe['c"+ w.substring(2) +"']")
                .replace(/h_\w+/g, (w) => "asiento.haber['c"+ w.substring(2) +"']")
                .replace(/_/g, '')

            result['c'+ ac[0].trim()] = val
        })
        return result
    }).forEach((cuentas, dh) => {
        dh = (dh == 1) ? 'haber' : 'debe' 

        for (var cuenta in cuentas) {
            asiento[dh][cuenta] = parseFloat(eval(cuentas[cuenta])).toFixed(2)
        }
    })
    diario.push(asiento)
    function tr(dh) {
        var html = `<tr class="sep"><td></td><td></td><td></td><td></td></tr>`
        for (var cuenta in asiento[dh]) {
            var format = (tx) => (tx) ? tx : ''
            for (var i = 3; i < cuenta.length; i++) {
                html += `<tr><td>${cuenta.substring(1, i)}</td><td>${plan[cuenta.substring(0, i)]}</td><td></td><td></td></tr>`
            }
            html += `<tr><td>${cuenta.substring(1)}</td><td>${plan[cuenta]}</td><td>${format(asiento.debe[cuenta])}</td><td>${format(asiento.haber[cuenta])}</td></tr>`
        }
        return html
    }
    pcge.innerHTML = `<table class="pcge">
        <thead><tr><th>CUENTA</th><th>NOMBRE</th><th>DEBE</th><th>HABER</th><tr></thead><tbody>
        ${tr('debe')} ${tr('haber')}
        </tbody>
    </table>`
})
