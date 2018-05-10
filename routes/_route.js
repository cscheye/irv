class Route {
  get config() {
    return {
      method: this.method,
      path: this.path,
      handler: this.handler.bind(this),
    }
  }

  get method() {
    return Route.GET
  }

  handler() {
    return `${this.method} ${this.path}`
  }

  get path() {
    // todo move this to a decorator
    throw new Error('get path must be defined in subclass')
  }

}

Route.GET = 'GET'
Route.POST = 'POST'

module.exports = Route
