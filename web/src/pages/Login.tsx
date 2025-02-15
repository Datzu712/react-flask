import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '20rem' }}>
                <h1 className="card-title text-center">Login</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
