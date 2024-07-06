import React from "react";
import { StyledComponent } from "./styles";

const TIME_OUT = 5000;

function ErrorFallback({ error, resetErrorBoundary }: any) {
  const [countdown, setCoutdown] = React.useState(TIME_OUT);

  const chunkFailedMessage = /Loading chunk [\d]+ failed/;
  const errorLoadChunk =
    error?.message && chunkFailedMessage.test(error?.message);

  if (errorLoadChunk) {
    return (
      <StyledComponent>
        <h1>
          Hệ thống đang có bản cập nhật mới, bạn vui lòng đợi trong giây lát!{" "}
          {countdown ? (
            <span className="countdown">{countdown / 1000}s</span>
          ) : null}
        </h1>
        <span onClick={window.location.reload}>Thử lại!</span>
      </StyledComponent>
    );
  }
  return (
    <StyledComponent>
      <h1>Đã xảy ra lỗi hệ thống: </h1>
      <pre>{error?.message}</pre>
      <p>
        Vui lòng thử lại sau 5 phút hoặc liên hệ với phòng IT để được hỗ trợ kịp
        thời.
      </p>
      <span onClick={resetErrorBoundary}>Thử lại!</span>
    </StyledComponent>
  );
}

export default ErrorFallback;
