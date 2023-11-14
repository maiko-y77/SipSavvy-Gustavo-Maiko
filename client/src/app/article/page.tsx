import { useEffect, useState } from 'react';
import { UserIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import axios from 'axios';


export default function Article() {

    const [article, setArticle] = useState(null);

    useEffect(() => {
        // sending request to backend
        axios.get('/articles/:id')
            .then(response => setArticle(response.data))
            .catch(error => console.error('Error fetching article:', error));
    }, []);

    if (!article) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="article-main">
                <div className="article-container">
                    <p className="article-div">
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </p>
                    <div className="post-info">
                        <div className="author-info">
                            <div className="author-bullet">
                                <a className="avatar icon" href="/">
                                    <UserIcon width={36} height={36} />
                                </a>
                                <p>
                                    Author Name
                                </p>
                            </div>
                            <div className="text-wrapper-4">Follow</div>
                            <div className="icons">
                                <div className="group-2">
                                    <img className="vector" src="img/vector-2.svg" />
                                    <div className="element">650 likes</div>
                                </div>
                                <img className="img-2" src="img/vector.svg" />
                            </div>
                        </div>
                        <p className="article-p">Published on October 25, 2023 12:27 AM.</p>
                    </div>
                    <img className="article-image" src="img/image.png" />
                    <div className="article-content">
                        <p className="text-wrapper-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lobortis odio, a aliquet mauris.
                            Aliquam fermentum, lacus sed sagittis auctor, nulla dolor congue urna, vitae sagittis odio magna at orci.
                            Praesent ullamcorper risus ac dui volutpat, nec aliquam mauris semper. Pellentesque imperdiet arcu posuere
                            augue imperdiet ornare. Duis consequat, erat sit amet lobortis porttitor, justo nisi pharetra libero, eu
                            bibendum enim elit pulvinar nisl. Donec molestie laoreet diam, sed convallis sem auctor ac. Aliquam
                            eleifend, nisl nec ullamcorper blandit, lacus dui ultrices diam, nec interdum felis felis non eros. Etiam
                            dapibus quam et tortor dictum volutpat. Mauris tempor elementum tristique.
                        </p>
                        <p className="text-wrapper-6">
                            Integer massa eros, malesuada sed tincidunt a, tristique ultricies nibh. Proin ullamcorper enim sit amet
                            placerat interdum. Phasellus in sapien nec sem euismod tincidunt. Etiam eleifend dignissim tincidunt.
                            Nulla scelerisque tortor quis erat venenatis tempor. Integer pharetra sit amet dolor sed molestie.
                            Pellentesque tincidunt eget elit quis consequat. Praesent vitae leo at augue fermentum malesuada sed at
                            elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut
                            ultricies turpis vitae malesuada blandit. Ut magna lectus, pretium vel ultricies a, pharetra eget augue.
                            Etiam interdum ornare scelerisque.
                        </p>
                        <p className="text-wrapper-6">
                            Suspendisse et accumsan lectus, in eleifend lectus. Suspendisse potenti. Vivamus non mauris eu neque
                            ornare ornare. Nam vitae rutrum libero. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Nulla aliquam sed lectus vitae sodales. Sed aliquam elit id volutpat
                            semper. In at malesuada tellus, id faucibus velit. In pretium nunc dolor, finibus fringilla magna commodo
                            pulvinar. Etiam laoreet vestibulum eros id gravida. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.
                        </p>
                        <p className="text-wrapper-6">
                            Pellentesque laoreet venenatis quam eu feugiat. Ut vel tempor mauris. Morbi ipsum sapien, sagittis sit
                            amet mi sed, porttitor dignissim nibh. Proin at suscipit risus, eu elementum eros. Pellentesque in
                            tincidunt sem, in luctus purus. Proin nisl felis, tincidunt eget elit ut, faucibus dapibus justo.
                            Pellentesque vestibulum fringilla dolor quis tincidunt. Fusce luctus eleifend sagittis. Proin bibendum et
                            justo quis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                            curae; Sed eget ex eu magna ornare cursus. Vivamus nec lectus porta, cursus augue nec, tincidunt sapien.
                            Vestibulum non sagittis elit. Vestibulum vel augue faucibus, pellentesque quam non, tristique elit.
                        </p>
                        <p className="text-wrapper-6">
                            Sed libero lectus, sagittis sed metus nec, pellentesque euismod magna. Sed elit nulla, rhoncus eget
                            lacinia eu, ultrices id dolor. Curabitur a bibendum orci. Aliquam maximus mi ut mi fermentum consequat.
                            Aliquam interdum, purus in condimentum hendrerit, nisi sapien dictum arcu, eu laoreet augue erat vitae
                            enim. Aenean et felis suscipit, euismod est eu, iaculis dui. Ut pulvinar lacus in congue vestibulum. Ut
                            condimentum nibh sapien, vel aliquet mauris molestie id. Mauris quis arcu at augue mollis ullamcorper.
                            Quisque eu mi et tellus consectetur ullamcorper a sed lorem. Fusce posuere vulputate enim eu facilisis.
                            Vivamus tempus tincidunt dui, et finibus orci blandit vel. Vestibulum velit felis, tincidunt id cursus
                            vel, finibus a lacus. Praesent pulvinar eleifend tellus vitae tincidunt. Etiam non dui vestibulum nunc
                            dictum.
                        </p>
                    </div>
                    <div className="author-info-2">
                        <div className="author-bullet">
                            <a className="avatar icon" href="/">
                                <UserIcon width={36} height={36} />
                            </a>
                            <p>
                                Author Name
                            </p>
                        </div>
                        <div className="text-wrapper-4">Follow</div>
                        <div className="icons">
                            <div className="group-2">
                                <img className="vector" src="img/vector-3.svg" />
                                <div className="element">650 likes</div>
                            </div>
                            <img className="img-2" src="img/vector-4.svg" />
                        </div>
                    </div>
                    <div className="related-articles">
                        <div className="sidebar-section">
                            <div className="section-title-here">Related Articles</div>
                        </div>
                        <div className="related-articles-2">
                            <div className="related-article-item">
                                <div className="article-picture2"></div>
                                <div className="article-content2">
                                    <p className="post-title">Winemakers Can No Longer Afford to Drink Their Own Wine in America</p>
                                    <p className="article-preview">
                                        Thanks to restaurants’ price gouging tactics, you probably can’t either — There’s something screwed
                                        up about a winemaker not being able to ...
                                    </p>
                                    <div className="author-bullet">
                                        <a className="avatar icon" href="/">
                                            <UserIcon width={36} height={36} />
                                        </a>
                                        <p>
                                            Author Name
                                        </p>
                                    </div>
                                </div>
                                <Link href="#" className="save-btn">
                                    <BookmarkIcon width={18} height={24} />
                                    <div className="text-wrapper-8">Save for later</div>
                                </Link>
                            </div>
                            <div className="related-article-item">
                                <div className="article-picture2"></div>
                                <div className="article-content2">
                                    <p className="post-title">
                                        These Are the Embarrassing, Unfashionable Wines Sommeliers (Like Me) Drink on Their Days Offt
                                    </p>
                                    <p className="article-preview">
                                        And why you should drink them too — I call it The Sommelier’s Paradox. It goes like this: The more
                                        popular a wine is, the less likely ...
                                    </p>
                                    <div className="author-bullet">
                                        <a className="avatar icon" href="/">
                                            <UserIcon width={24} height={24} />
                                        </a>
                                        <p>
                                            Author Name
                                        </p>
                                    </div>
                                </div>
                                <Link href="#" className="save-btn">
                                    <BookmarkIcon width={18} height={24} />
                                    <div className="text-wrapper-8">Save for later</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}