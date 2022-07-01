<script>
    import AdminHeader from "../components/AdminHeader.svelte";
    import {user} from "../stores";
    import Chart from 'svelte-frappe-charts';
    import AdminListUsers from "../components/AdminListUsers.svelte"
    import {getContext, onMount} from "svelte";
    const TravelShareService = getContext("TravelShareService");

    let users = [];
    let countNewUsers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let newUsersData = {labels: [], datasets: [{values: []}]}

    let posts = [];
    let countNewPosts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let newPostsData = {labels: [], datasets: [{values: []}]}
    let countCategories = [0, 0, 0, 0, 0, 0, 0, 0]
    let postsByCaterogyData = {labels: [], datasets: [{values: []}]}

    onMount(async () => {
        users = await TravelShareService.getUsers();
        users.map(x  => {
            switch (x.createdAt.split('-')[1]) {
                case '01':
                    countNewUsers[0] += 1;
                    break;
                case '02':
                    countNewUsers[1] += 1;
                    break;
                case '03':
                    countNewUsers[2] += 1;
                    break;
                case '04':
                    countNewUsers[3] += 1;
                    break;
                case '05':
                    countNewUsers[4] += 1;
                    break;
                case '06':
                    countNewUsers[5] += 1;
                    break;
                case '07':
                    countNewUsers[6] += 1;
                    break;
                case '08':
                    countNewUsers[7] += 1;
                    break;
                case '09':
                    countNewUsers[8] += 1;
                    break;
                case '10':
                    countNewUsers[9] += 1;
                    break;
                case '11':
                    countNewUsers[10] += 1;
                    break;
                case '12':
                    countNewUsers[11] += 1;
                    break;
            }
        });
        newUsersData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'],
            datasets: [
                {
                    values: countNewUsers
                }
            ]
        };
        
        posts = await TravelShareService.getPostsFeed();
        posts.map(x  => {
            switch (x.createdAt.split('-')[1]) {
                case '01':
                    countNewPosts[0] += 1;
                    break;
                case '02':
                    countNewPosts[1] += 1;
                    break;
                case '03':
                    countNewPosts[2] += 1;
                    break;
                case '04':
                    countNewPosts[3] += 1;
                    break;
                case '05':
                    countNewPosts[4] += 1;
                    break;
                case '06':
                    countNewPosts[5] += 1;
                    break;
                case '07':
                    countNewPosts[6] += 1;
                    break;
                case '08':
                    countNewPosts[7] += 1;
                    break;
                case '09':
                    countNewPosts[8] += 1;
                    break;
                case '10':
                    countNewPosts[9] += 1;
                    break;
                case '11':
                    countNewPosts[10] += 1;
                    break;
                case '12':
                    countNewPosts[11] += 1;
                    break;
            }

            x.spots.map(x => {
                switch (x.category) {
                    case 'Food':
                        countCategories[0] += 1;
                        break;
                    case 'Museum':
                        countCategories[1] += 1;
                        break;
                    case 'Nature':
                        countCategories[2] += 1;
                        break;
                    case 'History':
                        countCategories[3] += 1;
                        break;
                    case 'Music':
                        countCategories[4] += 1;
                        break;
                    case 'Chill':
                        countCategories[5] += 1;
                        break;
                    case 'Night Life':
                        countCategories[6] += 1;
                        break;
                    case 'Accommodation':
                        countCategories[7] += 1;
                        break;
                }
            });
            
        });
        newPostsData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'],
            datasets: [
                {
                    values: countNewPosts
                }
            ]
        };
        postsByCaterogyData = {
        labels: ["Food", "Museum", "Nature", "History", "Music", "Chill", "Night Life", "Accommodation"],
        datasets: [
            {
                values: countCategories
            }
        ]
    };
    });

    let loggedUser = get__store(user);
    function get__store(store) {
        let val
        store.subscribe(s => val = s.admin)()
        return val
    }

    let error = false;
    if (!loggedUser) {
        error = true;
    }
</script>

<AdminHeader />

{#if error}
    User is not Admin
{:else}
<div class='box' style='background-color: #FEEEAD'>
    <AdminListUsers bind:users={users} />
    <div class='box' style='background-color: #FBF5D7'>
        <div style='text-align: center;'>
            <h4 class="title">New Users</h4>
        </div>
        <Chart data={newUsersData} type="line" />
    </div>

    <div class='box' style='background-color: #FBF5D7'>
        <div style='text-align: center;'>
            <h4 class="title">New Posts</h4>
        </div>
        <Chart data={newPostsData} type="line" />
    </div>

    <div class='box' style='background-color: #FBF5D7'>
        <div style='text-align: center;'>
            <h4 class="title">Posts by Category</h4>
        </div>
        <Chart data={postsByCaterogyData} type="bar" />
    </div>    
</div>
{/if}
