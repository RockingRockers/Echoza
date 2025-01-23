
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const mainContent = document.getElementById('main-content');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10; 
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
            }, 500);
        }

        
        progressBar.style.width = `${progress}%`;
        progressPercentage.textContent = `${Math.floor(progress)}%`;
    }, 300);
});

function _0x1589(_0x14fd3, _0x3ce522) {
    const _0x28b8e8 = _0x1fe9();
    _0x1589 = function (_0x15b3f3, _0x209ec2) {
        _0x15b3f3 = _0x15b3f3 - (-0x1199 + -0xb17 + 0x1de1);
        let _0x3b9d5a = _0x28b8e8[_0x15b3f3];
        if (_0x1589['YFaQEj'] === undefined) {
            var _0x5dea77 = function (_0x2af86f) {
                const _0x21684c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x58b086 = '';
                let _0x188509 = '';
                for (let _0x3786f1 = -0x16 * 0x1bb + -0xe2f * 0x2 + -0x4 * -0x109c, _0x5f0f08, _0x2f3cee, _0x10de58 = 0x29 * -0xdc + -0x322 * -0xc + -0x1 * 0x25c; _0x2f3cee = _0x2af86f['charAt'](_0x10de58++); ~_0x2f3cee && (_0x5f0f08 = _0x3786f1 % (0xe61 + 0x50 * -0x7b + 0x1813) ? _0x5f0f08 * (-0x57 * 0x65 + -0x1e3b + 0x40ce) + _0x2f3cee : _0x2f3cee, _0x3786f1++ % (0x64f + 0xd4d + -0x1398)) ? _0x58b086 += String['fromCharCode'](0x1e64 + -0x19 * 0xd6 + -0x87f & _0x5f0f08 >> (-(0x9 * 0xb5 + -0x159c + 0xf41) * _0x3786f1 & -0x9e * 0xb + 0x5 * 0x3d + 0x59f)) : 0x25fc + -0x1d40 + -0x8bc) {
                    _0x2f3cee = _0x21684c['indexOf'](_0x2f3cee);
                }
                for (let _0x355437 = -0x16 * -0x4b + 0x508 + -0xb7a, _0x40c796 = _0x58b086['length']; _0x355437 < _0x40c796; _0x355437++) {
                    _0x188509 += '%' + ('00' + _0x58b086['charCodeAt'](_0x355437)['toString'](0x1 * -0x32b + -0xcf2 + 0x102d))['slice'](-(0xf22 + -0x39e * -0x7 + 0x3e * -0xa7));
                }
                return decodeURIComponent(_0x188509);
            };
            const _0x587538 = function (_0x376a96, _0x508af9) {
                let _0x6a88bb = [], _0x3a62b1 = 0x9d3 + 0x1ead + -0x180 * 0x1b, _0x59816c, _0x2e4776 = '';
                _0x376a96 = _0x5dea77(_0x376a96);
                let _0x549822;
                for (_0x549822 = 0x67c + 0x732 + 0x6d7 * -0x2; _0x549822 < -0xbf * -0x1 + -0x4f8 + -0x539 * -0x1; _0x549822++) {
                    _0x6a88bb[_0x549822] = _0x549822;
                }
                for (_0x549822 = 0x1fd9 + 0x295 * 0x5 + -0x2cc2; _0x549822 < -0x235f + -0x726 * -0x2 + -0x1 * -0x1613; _0x549822++) {
                    _0x3a62b1 = (_0x3a62b1 + _0x6a88bb[_0x549822] + _0x508af9['charCodeAt'](_0x549822 % _0x508af9['length'])) % (0xc64 + -0x1fb7 + 0x1453);
                    _0x59816c = _0x6a88bb[_0x549822];
                    _0x6a88bb[_0x549822] = _0x6a88bb[_0x3a62b1];
                    _0x6a88bb[_0x3a62b1] = _0x59816c;
                }
                _0x549822 = -0xfd * -0x17 + 0x2d5 + -0xcc8 * 0x2;
                _0x3a62b1 = -0x2f5 * -0x1 + -0xd * 0x2ad + 0xe * 0x246;
                for (let _0x45c8c5 = 0xcdb + -0x252e + 0x1853; _0x45c8c5 < _0x376a96['length']; _0x45c8c5++) {
                    _0x549822 = (_0x549822 + (0x5a4 + -0x1870 + 0x12cd)) % (-0x917 * 0x1 + -0xe4e + -0x4e1 * -0x5);
                    _0x3a62b1 = (_0x3a62b1 + _0x6a88bb[_0x549822]) % (-0xf1 * -0x13 + -0x4d0 + -0xc13);
                    _0x59816c = _0x6a88bb[_0x549822];
                    _0x6a88bb[_0x549822] = _0x6a88bb[_0x3a62b1];
                    _0x6a88bb[_0x3a62b1] = _0x59816c;
                    _0x2e4776 += String['fromCharCode'](_0x376a96['charCodeAt'](_0x45c8c5) ^ _0x6a88bb[(_0x6a88bb[_0x549822] + _0x6a88bb[_0x3a62b1]) % (-0x16a7 + 0x21ad + -0xa06)]);
                }
                return _0x2e4776;
            };
            _0x1589['OUJYmv'] = _0x587538;
            _0x14fd3 = arguments;
            _0x1589['YFaQEj'] = !![];
        }
        const _0x4b9741 = _0x28b8e8[0xc8f * 0x1 + -0x2 * -0x281 + -0x1 * 0x1191];
        const _0x1e3084 = _0x15b3f3 + _0x4b9741;
        const _0x2c671d = _0x14fd3[_0x1e3084];
        if (!_0x2c671d) {
            if (_0x1589['Lpgyjr'] === undefined) {
                _0x1589['Lpgyjr'] = !![];
            }
            _0x3b9d5a = _0x1589['OUJYmv'](_0x3b9d5a, _0x209ec2);
            _0x14fd3[_0x1e3084] = _0x3b9d5a;
        } else {
            _0x3b9d5a = _0x2c671d;
        }
        return _0x3b9d5a;
    };
    return _0x1589(_0x14fd3, _0x3ce522);
}
function _0x1fe9() {
    const _0x341333 = [
        'AI9FvmondmoiWOmcWPBdTWbLha',
        'z2v0rwXLBwvUDej5swq',
        'scXDrmkEomoaWOmpW5lcNW5+fmo4mq',
        'W41RW4bGWOKtgZPqywa',
        'pevWW6hdUe4qFCkhW5a',
        'mZq4AMrWA1DW',
        'WPtcHqbPoq',
        'nZe1ogPqqKLRCq',
        'ou1YW6hcOcWruCkUW4ldUmkI',
        'CfPNBNy',
        'WPpdRSk9W4BdHvNcOu9wWRBdMmo3qG',
        'mtm2uxnlsuLI',
        'W7tcKSovECkonCoKF2eDW47dQa',
        'mJe2mJi3C0jQthDj',
        'WPZdHIPgqLjRB1i',
        'nta1mty3m29MBurQBG',
        'mtHbD01NCe4',
        'swvKB1u',
        'AhDnW7GsWPWZWPhcMqPAoq',
        'WPpcQGuaEuFcQmoS',
        'WP7dJcSVbYOsuLvPFZ7dSG',
        'BCkYWOtdNfBcKSolWPjJWPDt',
        'n8oxxvi8dCoUewFdMMm',
        'nZzHy0P4wwi',
        'mZK3odyZmhrLDhfwzW',
        'z3zbr2C',
        'mtaYnur0swvTEG',
        'mtq2mtK5y1zjAvzq'
    ];
    _0x1fe9 = function () {
        return _0x341333;
    };
    return _0x1fe9();
}
(function (_0x253e0f, _0x52c01c) {
    function _0x4f501f(_0x510444, _0x29be03) {
        return _0x1589(_0x29be03 - -0x231, _0x510444);
    }
    function _0x2f1d33(_0x2a284a, _0x3ba545) {
        return _0x1fe3(_0x2a284a - -0x32, _0x3ba545);
    }
    const _0x3b6730 = _0x253e0f();
    while (!![]) {
        try {
            const _0x22be6a = -parseInt(_0x4f501f('p7ep', -0xf6)) / (0x1 * -0x99b + 0x1ce4 * -0x1 + -0x20 * -0x134) * (parseInt(_0x2f1d33(0x116, 0x115)) / (0x15e9 + -0x1 * 0x1e1 + -0x1406)) + -parseInt(_0x4f501f('I1yO', -0xe7)) / (0x6d * -0x1d + -0x2405 + 0x3061) * (-parseInt(_0x4f501f('G4dq', -0xe6)) / (-0x228b + -0x1e * 0x21 + -0x266d * -0x1)) + parseInt(_0x2f1d33(0x104, 0xfd)) / (0x2 * -0x2f + 0x194 * -0x10 + 0x19a3) * (parseInt(_0x4f501f('qzXl', -0xf5)) / (0x8c4 + 0x31 * 0xb3 + -0x2b01 * 0x1)) + parseInt(_0x4f501f('qzXl', -0xf1)) / (-0x17 * 0x169 + -0x3 * -0x1a9 + 0x1b7b) * (-parseInt(_0x2f1d33(0x111, 0x103)) / (-0x1a55 + 0x1 * 0x139 + 0x1924)) + -parseInt(_0x2f1d33(0x115, 0x10e)) / (0x4e1 * 0x3 + -0x18fa + 0xa60) + parseInt(_0x2f1d33(0x102, 0xf7)) / (-0x1 * -0xa85 + -0x1353 + 0x8d8) + -parseInt(_0x2f1d33(0x113, 0x10f)) / (0xf * 0x80 + -0x1 * 0x2284 + 0x1b0f) * (-parseInt(_0x2f1d33(0x10b, 0x118)) / (0xc4c + 0x19e6 + -0x2626));
            if (_0x22be6a === _0x52c01c) {
                break;
            } else {
                _0x3b6730['push'](_0x3b6730['shift']());
            }
        } catch (_0x1725fe) {
            _0x3b6730['push'](_0x3b6730['shift']());
        }
    }
}(_0x1fe9, -0x8b * -0x7a2 + 0x1bf03 * -0x1 + 0x56fda));
const obfuscateMsg = () => {
    const _0x6e0c21 = {
        'IedoU': _0x5e584c('*Hy8', -0xb1),
        'IpfEl': function (_0x571131, _0x1e5f61) {
            return _0x571131(_0x1e5f61);
        },
        'gvAGg': _0x5e584c('*Hy8', -0xb3),
        'pZgnv': function (_0x63199b, _0x2e21d5) {
            return _0x63199b(_0x2e21d5);
        }
    };
    const _0x378e34 = _0x6e0c21[_0x44b5ac(0x344, 0x33f)];
    function _0x5e584c(_0x220c91, _0x532b8d) {
        return _0x1589(_0x532b8d - -0x1eb, _0x220c91);
    }
    const _0x35d3c2 = _0x6e0c21[_0x5e584c('h(Qa', -0xad)](btoa, _0x378e34);
    function _0x44b5ac(_0x4aac0e, _0x4b5046) {
        return _0x1fe3(_0x4aac0e - 0x1fb, _0x4b5046);
    }
    document[_0x44b5ac(0x334, 0x32b)](_0x6e0c21[_0x44b5ac(0x330, 0x336)])[_0x5e584c('OmAE', -0xba)] = _0x6e0c21[_0x44b5ac(0x33c, 0x33b)](atob, _0x35d3c2);
};
function _0x1fe3(_0x379a13, _0x3878fb) {
    const _0x166cf1 = _0x1fe9();
    _0x1fe3 = function (_0x2531e6, _0x45d4c5) {
        _0x2531e6 = _0x2531e6 - (-0x1199 + -0xb17 + 0x1de1);
        let _0x565e3f = _0x166cf1[_0x2531e6];
        if (_0x1fe3['hebjYz'] === undefined) {
            var _0x3098c9 = function (_0x1cde45) {
                const _0x4854f9 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x4b2608 = '';
                let _0x568eca = '';
                for (let _0x3f7216 = -0x16 * 0x1bb + -0xe2f * 0x2 + -0x4 * -0x109c, _0x1081d9, _0x565c5f, _0x4ca4bb = 0x29 * -0xdc + -0x322 * -0xc + -0x1 * 0x25c; _0x565c5f = _0x1cde45['charAt'](_0x4ca4bb++); ~_0x565c5f && (_0x1081d9 = _0x3f7216 % (0xe61 + 0x50 * -0x7b + 0x1813) ? _0x1081d9 * (-0x57 * 0x65 + -0x1e3b + 0x40ce) + _0x565c5f : _0x565c5f, _0x3f7216++ % (0x64f + 0xd4d + -0x1398)) ? _0x4b2608 += String['fromCharCode'](0x1e64 + -0x19 * 0xd6 + -0x87f & _0x1081d9 >> (-(0x9 * 0xb5 + -0x159c + 0xf41) * _0x3f7216 & -0x9e * 0xb + 0x5 * 0x3d + 0x59f)) : 0x25fc + -0x1d40 + -0x8bc) {
                    _0x565c5f = _0x4854f9['indexOf'](_0x565c5f);
                }
                for (let _0x75b1f = -0x16 * -0x4b + 0x508 + -0xb7a, _0x484ee2 = _0x4b2608['length']; _0x75b1f < _0x484ee2; _0x75b1f++) {
                    _0x568eca += '%' + ('00' + _0x4b2608['charCodeAt'](_0x75b1f)['toString'](0x1 * -0x32b + -0xcf2 + 0x102d))['slice'](-(0xf22 + -0x39e * -0x7 + 0x3e * -0xa7));
                }
                return decodeURIComponent(_0x568eca);
            };
            _0x1fe3['XUZfbh'] = _0x3098c9;
            _0x379a13 = arguments;
            _0x1fe3['hebjYz'] = !![];
        }
        const _0x29a014 = _0x166cf1[0x9d3 + 0x1ead + -0x180 * 0x1b];
        const _0x477526 = _0x2531e6 + _0x29a014;
        const _0xbe9dbd = _0x379a13[_0x477526];
        if (!_0xbe9dbd) {
            _0x565e3f = _0x1fe3['XUZfbh'](_0x565e3f);
            _0x379a13[_0x477526] = _0x565e3f;
        } else {
            _0x565e3f = _0xbe9dbd;
        }
        return _0x565e3f;
    };
    return _0x1fe3(_0x379a13, _0x3878fb);
}
obfuscateMsg();

const musicCollection = document.getElementById('musicCollection');

function displaySongs(filteredSongs = songs) {
    musicCollection.innerHTML = '';
    filteredSongs.forEach(song => {
        const songCard = `
            <div class="music-box">
                <img src="${song.cover}" alt="${song.title}">
                <h3>${song.title}</h3>
                <audio controls>
                    <source src="${song.src}" type="audio/mpeg">
                </audio>
            </div>
        `;
        musicCollection.innerHTML += songCard;
    });

    addScrollAnimation();
}

function searchSongs() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(searchTerm));
    displaySongs(filteredSongs);
}



function addScrollAnimation() {
    const musicBoxes = document.querySelectorAll('.music-box');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    musicBoxes.forEach(box => observer.observe(box));
}

displaySongs();