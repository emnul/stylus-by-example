export const main = `#![no_main]
#![no_std]
extern crate alloc;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
use alloc::vec::Vec;

use stylus_sdk::stylus_proc::entrypoint;

#[entrypoint]
fn user_main(input: Vec<u8>) -> Result<Vec<u8>, Vec<u8>> {
    Ok(input)
}
`;

export const cargo = `[package]
name = "bytes_in_bytes_out"
version = "0.1.0"
edition = "2021"

[dependencies]
stylus-sdk = "0.4.2"
wee_alloc = "0.4.5"

[features]
export-abi = ["stylus-sdk/export-abi"]

[profile.release]
codegen-units = 1
strip = true
lto = true
panic = "abort"
opt-level = "s"

[workspace]
`;
