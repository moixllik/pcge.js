# Extensión PCGE, Perú - 2019
### Ejemplo

```pcge
1212=1_000
//
40111=d_1212 / 1.18 * 18%;;
70121=d_1212 / 1.18
```

<details>
    <summary>Resultado</summary>
<table class="pcge">
    <thead><tr><th>CUENTA</th><th>NOMBRE</th><th>DEBE</th><th>HABER</th></tr><tr></tr></thead><tbody>
    <tr class="sep"><td></td><td></td><td></td><td></td></tr><tr><td>12</td><td>CUENTAS POR COBRAR COMERCIALES – TERCEROS</td><td></td><td></td></tr><tr><td>121</td><td>Facturas, boletas y otros comprobantes por cobrar</td><td></td><td></td></tr><tr><td>1212</td><td>Emitidas en cartera</td><td>1000.00</td><td></td></tr> <tr class="sep"><td></td><td></td><td></td><td></td></tr><tr><td>40</td><td>TRIBUTOS, CONTRAPRESTACIONES Y APORTES AL SISTEMA PÚBLICO DE PENSIONES Y DE SALUD POR PAGAR</td><td></td><td></td></tr><tr><td>401</td><td>Gobierno nacional</td><td></td><td></td></tr><tr><td>4011</td><td>Impuesto general a las ventas</td><td></td><td></td></tr><tr><td>40111</td><td>IGV – Cuenta propia</td><td></td><td>152.54</td></tr><tr><td>70</td><td>VENTAS</td><td></td><td></td></tr><tr><td>701</td><td>Mercaderías</td><td></td><td></td></tr><tr><td>7012</td><td>Mercaderías - venta local</td><td></td><td></td></tr><tr><td>70121</td><td>Terceros</td><td></td><td>847.46</td></tr>
    </tbody>
</table>
</details>

### Agregar

```html
<style>@import "https://moixllik.github.io/pcge.js/pcge.css";</style>
<script src="https://moixllik.github.io/pcge.js/plan-2019.js"></script>
<script src="https://moixllik.github.io/pcge.js/pcge.js"></script>
```
