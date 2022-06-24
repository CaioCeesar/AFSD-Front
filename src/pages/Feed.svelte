<script>
    import Header from '.././components/Header.svelte';
    import FeedList from '.././components/FeedList.svelte';

    let posts = [
        {
            profileName: 'Caio Cesar',
            profilePicture: 'P',
            title: 'Viena',
            picture: 'https://www.dicasdeviagem.com/wp-content/uploads/2019/07/schoenbrunn-vienna.jpg',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
            profileName: 'Alan Piana',
            profilePicture: 'P',
            title: 'Paris',
            picture: 'https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        }
    ]
</script>
  
<div>
    <Header profilePicture={'https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/49840135_2130540606981930_1920307782444122112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6gb9KnA9qrEAX8gPFr1&_nc_ht=scontent-frt3-1.xx&oh=00_AT_KdqrSv32oRxnHD3NDMFvhbd23K9nVccatRcgwWMMw1w&oe=62DB1B5D'}/>
    <FeedList posts={posts} />
</div>
