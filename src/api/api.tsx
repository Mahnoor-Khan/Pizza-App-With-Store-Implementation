

export const getData = async () => {
    console.log("????")
    try {
       console.log("Getting The Data")
      return console.log({
        checkValues : [50, 100],
        pizzaType : 600,
        quantity : 1
    })
    } catch (error) {
      throw Promise.reject(error)
    }
  }

export const setData = async (data :any) => {
    console.log("????")
    try {
      const response = await data;

      console.log('Yes Data is Set' , response)
      return response
    } catch (error) {
      throw Promise.reject(error)
    }
  }
