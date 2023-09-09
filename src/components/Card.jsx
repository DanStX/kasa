import React from 'react';

const Card = ({title, description, cover}) => {
    // console.log(props);
    return (
        <article class="card">
                <a href="./pages/laNote.html">
                    <div class="card__picture">
                        <img src={cover} class="card__picture-img" alt="photo"/>
                        <span class="card__picture-new">Nouveau</span>
                    </div>
                </a>
                <div class="card__info">
                    <h3 class="card__info-title">
                        <span  class="span-title">{title}</span>
                        <span class="fa-stack hackcheck">
                   
                            <i class="fa-regular fa-heart fa-stack-1x">

                            </i>
                            <span>
                                <i class="fa-solid fa-heart fa-stack-1x" ></i>
                            </span>
                        </span>
                    </h3>
                    <p class="card__info-para">{description} </p>
                </div>
            </article>
    );
};

export default Card ;