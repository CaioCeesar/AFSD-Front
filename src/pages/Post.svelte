<script>
    import Header from '.././components/Header.svelte';
    import Map from '.././components/Map.svelte';

    let post = {
        profileName: 'Caio Cesar',
        profilePicture: 'P',
        title: 'Viena',
        picture: 'https://www.dicasdeviagem.com/wp-content/uploads/2019/07/schoenbrunn-vienna.jpg',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }

    let spots = [ 
        {
            title: 'City Center',
            picture: 'https://content.r9cdn.net/rimg/dimg/f9/12/5a950c9f-city-22046-158f35f7117.jpg?crop=true&width=1020&height=498',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            lat: 48.203649229152454,
            long: 16.315870816561315
        },
        {
            title: 'Schönbrunn Palace',
            picture: 'https://lh5.googleusercontent.com/p/AF1QipPgSpIrX7RJtKtZw3Ibh42tdDmsRlvqmhWxIS4=w408-h306-k-no',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            lat: 48.185840991613006,
            long: 16.312656710057706
        }
    ]
</script>
  
<div>
    <Header profilePicture={'https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/49840135_2130540606981930_1920307782444122112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6gb9KnA9qrEAX8gPFr1&_nc_ht=scontent-frt3-1.xx&oh=00_AT_KdqrSv32oRxnHD3NDMFvhbd23K9nVccatRcgwWMMw1w&oe=62DB1B5D'}/>

    <div class='box' style='background-color: #FEEEAD'>
        <div class='box' style='background-color: #FBF5D7'>
            <div>{post.profileName}</div>
            <div>
                <h1 class='title' style='text-align: center;'>{post.title}</h1>
                {post.description}
            </div>
            <div style='text-align: center;'>
                <img src={post.picture} width=500 alt="img"/>
            </div>
        </div>

        <div class='box' style='background-color: #FBF5D7'>
            <h1 class='title' style='text-align: center;'>The Route</h1>
            <Map spots={spots} />
        </div>

        {#each spots as spot, i}
            <div class='box' style='background-color: #FBF5D7'>
                <div>
                    <h1 class='title' style='text-align: center;'>{i + 1}° {spot.title}</h1>
                    {spot.description}
                </div>
                <div style='text-align: center;'>
                    <img src={spot.picture} width=500 alt="img"/>
                </div>
            </div>
        {/each}
    </div>

    
</div>
