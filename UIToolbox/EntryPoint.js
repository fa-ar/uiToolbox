'use strict'

import { helpers } from './source/Core.js'
import { ui } from './source/Toolbox.js'


console.log(helpers.root)

ui('Render', 
    helpers.root,

    ui('Fragment',
        ui('UserInterface',
            ui('Frame',
                ui('XFrame',
                    ui('Spacer'),
                    ui('Button', 'close').styleType('borderless').pill(),
                ),
                ui('SFrame',
                    ui('YFrame',
                        ui('XFrame',
                            ui('Button', 'Call Frame', 
                                () => { ui('GFrame', ui('XFrame', ui('Button', 'Open', ()=>{ui('GFrame', ui('Button', 'Open', ()=>{ui('GFrame').open()})).open()}))).open().width('300px').height('300px').bottom('0px')}).pill(),
                        ),
                        ui('Button', 'Default'),
                        ui('Button', 'plain', () => {}).styleType('plain'),
                        ui('Button', 'borderless', () => {}).styleType('borderless'),
                        ui('Button', 'borderless', () => {}).styleType('borderless').pill(),
                        ui('Button', 'prominent', () => {}).styleType('prominent').pill(),
                        ui('Button', 'borderless prominent', () => {}).styleType('borderless.prominent').pill(),
                        ui('Button', 'tinted', () => {}).styleType('tinted'),
                        ui('Button', 'filled', () => {}).styleType('filled'),
                    ),
                ),
            ).width('300px').height('100%').margin('10px')
        ).backgroundColor('blue'),
    ),
)