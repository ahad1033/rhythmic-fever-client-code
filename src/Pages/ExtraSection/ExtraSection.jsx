const ExtraSection = () => {
    return (
        <div className="hero min-h-screen my-3" style={{ backgroundImage: 'url(https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/04/Dance-Cover.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Fill The Registration Form Online</h1>
                    <p className="mb-5">Sign Up now and get discount $5.</p>
                    <button className="btn btn-primary">Click Here to Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
