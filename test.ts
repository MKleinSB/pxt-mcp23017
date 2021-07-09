/**
 * It´s not necessary to define outputs. 
 * Outputs are standard.
 * Only inputs need to be defined.
 */
MCP23017.initMCP23017LED(Ports.GPA7)
MCP23017.initMCP23017Button(Ports.GPB7)
basic.forever(function () {
    MCP23017.setLed(Ports.GPB0, true)
    basic.pause(500)
    MCP23017.setLed(Ports.GPB0, false)
    basic.pause(500)
})
basic.forever(function () {
    if (MCP23017.MCPButtonPressed(Ports.GPB7)) {
        led.plot(2, 2)
    } else {
        led.unplot(2, 2)
    }
})
