const React = require('react')

const Default = () => {
    return (
        <html>
            <head>
                <title>Roll4Initative</title>
            </head>
            <body>
                <header>
                    <nav>
                        <li><a>Home</a></li>
                        <li><a>DM</a></li>
                        <li><a>Players</a></li>
                    </nav>

                </header>
                {html.children}
            </body>
        </html>
    )
}

exports.module = Default
