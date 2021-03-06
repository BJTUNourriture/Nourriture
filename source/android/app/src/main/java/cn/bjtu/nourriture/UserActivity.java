package cn.bjtu.nourriture;

import android.app.SearchManager;
import android.content.Context;
import android.os.Bundle;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.SearchView;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.inputmethod.InputMethodManager;

import cn.bjtu.nourriture.fragments.GroupFragment;
import cn.bjtu.nourriture.fragments.IngredientFragment;
import cn.bjtu.nourriture.fragments.LogoutFragment;
import cn.bjtu.nourriture.fragments.RecipeFragment;
import cn.bjtu.nourriture.fragments.users.UserFragment;

public class UserActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

    //Defining Variables
    private Toolbar toolbar;
    private NavigationView navigationView;
    private DrawerLayout drawerLayout;

    UserFragment mUserFragment = new UserFragment();
    IngredientFragment mIgredientFragment = new IngredientFragment();
    RecipeFragment mRecipeFragment = new RecipeFragment();
    GroupFragment mGroupFragment = new GroupFragment();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.user_layout);

        // Initializing Toolbar and setting it as the actionbar
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        //Initializing NavigationView
        navigationView = (NavigationView) findViewById(R.id.navigation_view);

        //Setting Navigation View Item Selected Listener to handle the item click of the navigation menu
        navigationView.setNavigationItemSelectedListener(this);

        // Initializing Drawer Layout and ActionBarToggle
        drawerLayout = (DrawerLayout) findViewById(R.id.drawer);
        ActionBarDrawerToggle actionBarDrawerToggle = new ActionBarDrawerToggle(this, drawerLayout, toolbar, R.string.openDrawer, R.string.closeDrawer) {

            @Override
            public void onDrawerClosed(View drawerView) {
                super.onDrawerClosed(drawerView);
            }

            @Override
            public void onDrawerOpened(View drawerView) {
                super.onDrawerOpened(drawerView);
                // Close keyboard if used
                View view = getCurrentFocus();
                if (view != null) {
                    InputMethodManager imm = (InputMethodManager)getSystemService(Context.INPUT_METHOD_SERVICE);
                    imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
                }
            }
        };

        //Setting the actionbarToggle to drawer layout
        drawerLayout.setDrawerListener(actionBarDrawerToggle);

        //calling sync state is necessay or else your hamburger icon wont show up
        actionBarDrawerToggle.syncState();

        // SET USER SELECTED
        navigationView.getMenu().getItem(0).setChecked(true);

        // SET FIRST USER SELECTED
        android.support.v4.app.FragmentTransaction trans1 = getSupportFragmentManager().beginTransaction();
        trans1.replace(R.id.frame, UserFragment.newInstance());
        trans1.commit();

    }

    public NavigationView getNavView() {
        return navigationView;
    }

    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater menuInflater = getMenuInflater();
        menuInflater.inflate(R.menu.menu_user, menu);

        MenuItem searchItem = menu.findItem(R.id.action_search);
        searchItem.setVisible(false);

        SearchManager searchManager = (SearchManager) UserActivity.this.getSystemService(Context.SEARCH_SERVICE);

        SearchView searchView = null;
        if (searchItem != null) {
            searchView = (SearchView) searchItem.getActionView();
        }
        if (searchView != null) {
            searchView.setSearchableInfo(searchManager.getSearchableInfo(UserActivity.this.getComponentName()));
        }



        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
//        if (id == R.id.action_settings) {
//            return true;
//        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onNavigationItemSelected(MenuItem menuItem) {
//        if (menuItem.isChecked()) menuItem.setChecked(false);
//        else menuItem.setChecked(true);

        //Closing drawer on item click
        drawerLayout.closeDrawers();

        //Check to see which item was being clicked and perform appropriate action
        switch (menuItem.getItemId()) {


            //Replacing the main content with ContentFragment Which is our Inbox View;
            case R.id.user:
                toolbar.setTitle(getString(R.string.user));
                android.support.v4.app.FragmentTransaction trans1 = getSupportFragmentManager().beginTransaction();
                trans1.replace(R.id.frame, UserFragment.newInstance());
                trans1.commit();
                break;
            case R.id.ingredients:
                toolbar.setTitle(getString(R.string.ingredients));
                android.support.v4.app.FragmentTransaction trans2 = getSupportFragmentManager().beginTransaction();
                trans2.replace(R.id.frame, IngredientFragment.newInstance());
                trans2.commit();
                break;
            case R.id.recipes:
                toolbar.setTitle(getString(R.string.recipes));
                android.support.v4.app.FragmentTransaction trans3 = getSupportFragmentManager().beginTransaction();
                trans3.replace(R.id.frame, RecipeFragment.newInstance());
                trans3.commit();
                break;
            case R.id.groups:
                toolbar.setTitle(getString(R.string.groups));
                android.support.v4.app.FragmentTransaction trans4 = getSupportFragmentManager().beginTransaction();
                trans4.replace(R.id.frame, GroupFragment.newInstance());
                trans4.commit();
                break;
            case R.id.logout:
                toolbar.setTitle(getString(R.string.logout));
                android.support.v4.app.FragmentTransaction trans5 = getSupportFragmentManager().beginTransaction();
                trans5.replace(R.id.frame, LogoutFragment.newInstance());
                trans5.commit();
                break;
            default:
                break;
        }
        return true;
    }
}
