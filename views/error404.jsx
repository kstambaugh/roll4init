const React = require('react')
const Def = require('./default')

const error404 = () => {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/businessduck.png" alt="businessduck" />
                    <p>Photo by <a href="https://i.chzbgr.com/full/9138623744/h8357D079/stock-photo-white-collar-worker-gettyimages-arlel-skeay-71415154">Ariel Skelley</a></p>
                </div>
            </main>
        </Def>
    )

}

module.exports = error404

