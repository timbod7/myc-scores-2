use poem::{Endpoint, Middleware, Request};

use tracing::error;

pub struct ErrorLogging;

impl<E: Endpoint> Middleware<E> for ErrorLogging {
    type Output = ErrorLoggerMiddleware<E>;

    fn transform(&self, ep: E) -> Self::Output {
        ErrorLoggerMiddleware { inner: ep }
    }
}

pub struct ErrorLoggerMiddleware<E> {
    inner: E,
}

impl<E: Endpoint> Endpoint for ErrorLoggerMiddleware<E> {
    type Output = E::Output;

    async fn call(&self, req: Request) -> poem::Result<Self::Output> {
        let result = self.inner.call(req).await;

        if let Err(ref err) = result {
            if err.status().is_server_error() {
                error!("server error: {:#?}", err);
                // Don't send the gruesome details of internal errors back to the client
                return Err(poem::Error::from_string("server error", err.status()));
            }
        }

        result
    }
}
