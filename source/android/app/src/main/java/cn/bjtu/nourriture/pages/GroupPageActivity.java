package cn.bjtu.nourriture.pages;

import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.WindowManager;
import android.widget.TextView;

import cn.bjtu.nourriture.R;
import cn.bjtu.nourriture.model.Group;

/**
 * Created by Benjamin
 * on 26/12/15.
 */
public class GroupPageActivity extends AppCompatActivity {

    private static final String TAG = "GroupPageActivity";
    public static final String NAME = "GROUPS";
    private static String mTitle = null;
    Toolbar toolbar = null;

    @Override
    protected void onCreate(Bundle bundle){
        super.onCreate(bundle);
        setContentView(R.layout.group_layout);
        hideactionbar();

        Group group = getIntent().getExtras().getParcelable(GroupPageActivity.NAME);

        toolbar = (Toolbar) findViewById(R.id.group_page_toolbar);
        toolbar.setTitleTextColor(new Color().parseColor(group.getColor().getTextColor()));
        toolbar.setBackgroundColor(new Color().parseColor(group.getColor().getPrimaryColor()));

        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowHomeEnabled(true);

        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
        getSupportActionBar().setTitle(group.getName());

        if (group.getDescription() != null) {
            ((TextView) findViewById(R.id.description)).setText(group.getDescription());
        }

    }

    private void hideactionbar() {
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }
}
