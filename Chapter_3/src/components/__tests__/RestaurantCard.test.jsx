import {render, screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/restaurantCardData.json"

it("should render restaurant card with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const resName = screen.getByText("NIC Ice Creams")

    expect(resName).toBeInTheDocument()
})

/* 💡NOTE:
        - when we test component that has props then do this:

            1. first copy the data that you have passed in the props by console.log the data.

            2. then inside the components folder creates a folder and name it "mocks" and inside that create a "json" file and paste the data
            
            3. then pass that data here in the component
*/