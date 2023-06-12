
const Instructors = () => {
    return (
        <div className="lg:flex gap-3">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://images.unsplash.com/photo-1553375886-59c75d4ee8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80" alt="Instructor" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><span className="font-semibold">Name:</span> Maria Julie</h2>
                    <p><span className="font-bold">Email:</span> mariajulie@gmail.com</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://images.unsplash.com/photo-1644659533096-1a22a56ac254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="Instructor" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><span className="font-semibold">Name:</span> Ahsanullah Haque</h2>
                    <p><span className="font-bold">Email:</span> ahasanullah13@gmail.com</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://plus.unsplash.com/premium_photo-1661753285685-47e6da75780f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Instructor" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><span className="font-semibold">Name:</span> Sara Binte Kobir</h2>
                    <p><span className="font-bold">Email:</span> sarakobir@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Instructors;