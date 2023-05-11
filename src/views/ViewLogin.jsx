
import Form from "../components/form/Form"

const ViewLogin = ({login}) => {
    return (
        <main className="bg-full-grad">
            <section >
                <div className="container">
                    <Form login={login} />
                </div>  
            </section>
        </main>
    )
}

export default ViewLogin