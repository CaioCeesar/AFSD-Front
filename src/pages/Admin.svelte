<script>
    import AdminHeader from "../components/AdminHeader.svelte";
    import {user} from "../stores";
    import Chart from 'svelte-frappe-charts';
    import AdminListUsers from "../components/AdminListUsers.svelte"

    let loggedUser = get__store(user);
    function get__store(store) {
        let val
        store.subscribe(s => val = s.admin)()
        return val
    }

    let error = false;
    if (!loggedUser) {
        error = true
    }

    let users = [];
    let data = {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [
            {
                values: [10, 12, 3, 9, 8, 15, 9]
            }
        ]
    };
</script>

<AdminHeader />

{#if error}
    User is not Admin
{:else}
<div class='box' style='background-color: #FEEEAD'>
    <AdminListUsers bind:users={users} />
    <div class='box' style='background-color: #FBF5D7'>
        <Chart data={data} type="line" />
    </div>
</div>
{/if}
