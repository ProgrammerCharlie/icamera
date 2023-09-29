class Drag {
  // 鼠标点击位置X方向坐标
  private startX = 0
  // 鼠标点击位置Y方向坐标
  private startY = 0
  private bodyEl?: HTMLBodyElement

  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.bodyEl = document.querySelector('body')!
      this.bodyEl.addEventListener('mousedown', this.onMouseDown.bind(this))
    })
  }

  private onMouseDown = (e: MouseEvent) => {
    this.startX = e.pageX
    this.startY = e.pageY
    const mouseMoveCb = this.onMouseMove.bind(this)
    this.bodyEl?.addEventListener('mousemove', mouseMoveCb)
    this.bodyEl?.addEventListener('mouseup', () => this.bodyEl?.removeEventListener('mousemove', mouseMoveCb))
    this.bodyEl?.addEventListener('mouseout', () => this.bodyEl?.removeEventListener('mousemove', mouseMoveCb))
  }

  private onMouseMove = (e: MouseEvent) => {
    const x = e.pageX - this.startX
    const y =  e.pageY - this.startY
    window.api.drag({x, y})
  }
}


export default () => {
  const drag = new Drag()
  return {drag}
}