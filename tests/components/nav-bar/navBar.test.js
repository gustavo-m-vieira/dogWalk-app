import navBar from "../../../src/components/nav-bar/navBar.js"


describe("NavBar", () => {

  beforeEach(() => {
    localStorage.clear()
  })

  it("should be visible if the 'loggedIn' localStorage value is set to true", () => {

    localStorage.setItem("loggedIn", true)
    const result = navBar.methods.visible()
    
    expect(result).toBeDefined()
    expect(result).toBeTruthy()
  })

  it("should not be visible if the 'loggedIn' localStorage value is set to anything other than true or undefined", () => {

    expect(navBar.methods.visible()).toBeFalsy()

    localStorage.setItem("loggedIn", false)
    expect(navBar.methods.visible()).toBeFalsy()

    localStorage.setItem("loggedIn", "other")
    expect(navBar.methods.visible()).toBeFalsy()
  })
  
})