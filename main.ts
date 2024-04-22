serial.redirectToUSB()
kitronik_VIEW128x64.show("TEMP", 0, kitronik_VIEW128x64.ShowAlign.Centre)
basic.forever(function () {
    serial.writeValue("x", input.rotation(Rotation.Roll))
    kitronik_VIEW128x64.show("temp : " + input.rotation(Rotation.Roll), 2, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.plot(input.rotation(Rotation.Roll))
})
