export default (Class) => {
  return (...args) => {
    const instance = new Class(...args)
    const _componentDidMount = instance.componentDidMount
    const _componentWillUnmount = instance.componentWillUnmount

    instance.componentDidMount = function () {
      if (_componentDidMount) _componentDidMount.call(instance)

      if (instance.componentWillFocus) {
        this._willFocusListner = this.props.navigation.addListener('willFocus', () => {
          this._focused = true
          this.componentWillFocus()
        })

        this._didFocusListener = this.props.navigation.addListener('didFocus', () => {
          if (!this._focused) {
            this.componentWillFocus()
          }
        })

        this._willBlurListener = this.props.navigation.addListener('willBlur', () => {
          this._focused = false
        })
      }
    }

    instance.componentWillUnmount = function () {
      if (_componentWillUnmount) _componentWillUnmount.call(instance)
      if (this._willFocusListner) this._willFocusListner.remove()
      if (this._willBlurListener) this._willBlurListener.remove()
      if (this._didFocusListener) this._didFocusListener.remove()
    }

    return instance
  }
}