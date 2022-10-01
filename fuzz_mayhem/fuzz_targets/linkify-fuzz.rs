#![no_main]
use libfuzzer_sys::fuzz_target;
use linkify::LinkFinder;
use std::str;

fuzz_target!(|data: &[u8]| {
    if data.len() > 2 {
        let mut opt = data[0];
        let in_string = str::from_utf8(data);
        match in_string {
            Ok(good_string)=> {
                let have_dot = opt & (2);
                let have_schema = opt & (4);
                opt = opt & 1;
                let mut finder = LinkFinder::new();
                finder.email_domain_must_have_dot(have_dot == 0);
                finder.url_must_have_scheme(have_schema == 0);

                match opt {
                    0=>{
                        finder.links(good_string).count();
                    },
                    1=>{
                        finder.spans(good_string).count();
                    },
                    _=>()
                }
            },
            Err(..)=>()
        }
    }
});
