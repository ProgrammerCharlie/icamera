import { Menu, MenuItem } from "electron";

const template = [
  {
    label: '退出',
    role: 'quit'
  }
] as MenuItem[]

export default Menu.buildFromTemplate(template)