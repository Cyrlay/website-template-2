import React from 'react';
import NewsCard from "../NewsCard/NewsCard";

const News = () => {
    return (
        <div className={'news-page'}>
            <div className={'cards mt-5'}>
                <NewsCard
                    newsDate={'28.03.2022'}
                    title={'Lorem Ipsum'}
                    content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet enim eu magna tincidunt egestas sit amet ac neque. Integer iaculis blandit augue, id aliquet justo aliquam et. Mauris sodales eros in arcu egestas efficitur. Cras iaculis purus eu diam fringilla, ac viverra lectus imperdiet. Quisque sit amet metus dignissim justo mattis convallis. Pellentesque in gravida diam, vel dictum arcu. Vivamus convallis lacus id dolor molestie, vel condimentum lectus rutrum. Vivamus faucibus interdum nisl, eu iaculis turpis vulputate vitae. Quisque volutpat lorem neque, vitae tincidunt lorem porta id. Proin quis euismod justo. Nunc elementum est non rhoncus venenatis. Nam id ante quam. Nulla facilisi. Etiam vestibulum leo et tempus ultricies. Nullam luctus, arcu ut varius molestie, urna diam mattis ipsum, sed auctor nibh est ac nisi.'}
                />

                <NewsCard
                    newsDate={'21.03.2022'}
                    title={'Asd nanana'}
                    content={'Suspendisse viverra lacus nulla, ut consectetur odio pulvinar eget. Nulla vulputate odio non turpis tempus mollis. Fusce vitae faucibus massa, tincidunt ultrices quam. In cursus lorem quis nibh gravida sollicitudin. Fusce viverra augue eu aliquet vestibulum. Etiam hendrerit libero vel mi facilisis, a aliquet massa volutpat. Ut placerat odio ut efficitur molestie. Pellentesque metus odio, suscipit et lobortis ut, condimentum sit amet ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'}
                />

                <NewsCard
                    newsDate={'14.03.2022'}
                    title={'Wiesław Paleta'}
                    content={'Sed sed eros elit. Phasellus imperdiet orci a libero vehicula venenatis. Vestibulum vel tincidunt mauris. Nullam commodo dui sit amet est tempus congue. In quis mauris vel dolor aliquet lacinia. Nam sed ex non diam faucibus facilisis non at mauris. Sed id ante felis. Duis auctor magna libero, vel tempus leo posuere in. Sed faucibus consectetur dui id cursus. Pellentesque rhoncus convallis efficitur. Praesent aliquet sodales eros non aliquam. Suspendisse ipsum lorem, aliquet eget vehicula non, ornare ac ligula. Aliquam ut justo ut nisi bibendum facilisis in at libero. Donec laoreet dolor vel nibh venenatis aliquam. Integer sapien erat, dictum ac maximus sit amet, varius eu ligula.'}
                />

                <NewsCard
                    newsDate={'07.03.2022'}
                    title={'Cras Mattis'}
                    content={'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ut dui rhoncus eros eleifend molestie vitae eu ligula. Vestibulum finibus congue ligula eu rutrum. Suspendisse aliquam eros diam, at fringilla lacus auctor quis. Donec vehicula tincidunt molestie. Curabitur elementum aliquam dictum. Aliquam enim diam, tincidunt sed convallis nec, auctor eu purus. Donec auctor non lorem at scelerisque. Nunc vel nisi nulla. Suspendisse eget quam bibendum, condimentum ante eu, facilisis urna. Nulla ultricies sagittis dui in varius. Integer blandit a sem eget rutrum. Integer et commodo nunc. Nam in urna in est tempor eleifend.'}
                />

            </div>
        </div>
    );
};

export default News;