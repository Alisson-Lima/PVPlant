import "./style.css"
export function Main(){
    return (
        <main>
            <header>
                <div className="search-bar">
                    <input type="text"/>
                    <span>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 14L19 19M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9Z" stroke="#D9D9D9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    </div>
            </header>
            <article className="Title">
                <h1>Paisa<wbr/>gismo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus dui, finibus non condimentum vitae.</p>
                <a href="#" className="CTA-button" onClick={(e) => e.preventDefault()}>See More</a>
            </article>
            <div className="others">
                <article>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus dui, finibus non condimentum vitae.</p>
                </article>
                <article>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus dui, finibus non condimentum vitae.</p>
                </article>
            </div>
        </main>
    )
}