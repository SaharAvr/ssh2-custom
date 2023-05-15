# ssh2-custom

A custom package for the [ssh2](https://github.com/mscdex/ssh2) library with pre-built native modules. This package is intended to be used in environments where the required build tools for `ssh2`'s native modules are not available.

## Installation

Install the package using npm:

```sh
npm install ssh2-custom
```

## Usage

Use the custom package in your project by requiring it as usual:

```javascript
const ssh2 = require('ssh2-custom');
```

For documentation on how to use the `ssh2` library, please refer to the [official ssh2 repository](https://github.com/mscdex/ssh2).

## Disclaimer

This custom package is provided as a workaround for environments without the required build tools for `ssh2`'s native modules. It is not an official package and may not be suitable for all use cases. The pre-built native modules included in this package are built for specific operating systems and architectures, and may not work correctly on all systems.

For the best experience and support, it is recommended to use the official[ssh2](https://github.com/mscdex/ssh2) library and ensure that the required build tools are available in your environment.

## License

This custom package is licensed under the ISC License. Please refer to the [official ssh2 repository](https://github.com/mscdex/ssh2) for information on the license of the original library and its dependencies.

## Contributing

Please note that this custom package is provided as a convenience and is not intended for general contributions. If you wish to contribute to the development of the `ssh2` library, please refer to the [official ssh2 repository](https://github.com/mscdex/ssh2).

For issues specific to this custom package, please open an issue in the [GitHub repository](https://github.com/SaharAvr/ssh2-custom/issues) or submit a pull request.

## Acknowledgments

This custom package is based on the work of [Brian White](https://github.com/mscdex) and the [ssh2](https://github.com/mscdex/ssh2) library. All credit for the functionality provided by this package goes to the original author and contributors of the `ssh2` library.