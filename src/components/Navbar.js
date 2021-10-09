import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Navbar() {
    return (
        <Menu attached="top" className="borderless">
            <Menu.Menu>
                <Menu.Item>
                    <h1>Anasayfa</h1>
                </Menu.Item>
            </Menu.Menu>
        </Menu >
    )
}