FROM ghcr.io/evanrichter/cargo-fuzz as builder

ADD . /linkify
WORKDIR /linkify
RUN rm -rf ./fuzz && mkdir fuzz && cp -R ./fuzz_mayhem/* ./fuzz
RUN cargo +nightly fuzz build 

FROM debian:bookworm
COPY --from=builder /linkify/fuzz/target/x86_64-unknown-linux-gnu/release/linkify-fuzz /