const rewire = require("rewire")
const App = rewire("./App")
const importAll = App.__get__("importAll")
// @ponicode
describe("importAll", () => {
    test("0", () => {
        let callFunction = () => {
            importAll({ keys: () => ["Marketing", "Sales", "Software Engineer"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            importAll({ keys: () => ["Marketing", "Data Scientist", "Sales"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            importAll({ keys: () => ["Software Engineer", "Sales", "Marketing"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            importAll({ keys: () => ["Chief Product Officer", "Data Scientist", "Chief Product Officer"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            importAll({ keys: () => ["Software Engineer", "Chief Product Officer", "Software Engineer"] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            importAll(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
