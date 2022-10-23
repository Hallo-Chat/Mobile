package nhom1.cnm.hallochat.view;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.util.ArrayList;
import java.util.List;

import nhom1.cnm.hallochat.R;
import nhom1.cnm.hallochat.adapter.ContactsAdapter;
import nhom1.cnm.hallochat.model.UserModel;

public class ContactsActivity extends AppCompatActivity {

    protected FloatingActionButton fabAdd;
    protected RecyclerView recyclerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contacts);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        ActionBar actionBar = getSupportActionBar();
        actionBar.setDisplayHomeAsUpEnabled(true);
        actionBar.setHomeButtonEnabled(true);

        fabAdd = findViewById(R.id.fap_add);
        fabAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(ContactsActivity.this, AddContactActivity.class));
            }
        });

        recyclerView = findViewById(R.id.recycler_view);

        List<UserModel> userModelList = new ArrayList<UserModel>();
        userModelList.add(new UserModel(R.drawable.cube, "Văn Phát", "Online 12h trước"));
        userModelList.add(new UserModel(R.drawable.cube, "Quang Huy", "Online 10h trước"));
        userModelList.add(new UserModel(R.drawable.cube, "Xuân Hùng", "Online 2h trước"));
        userModelList.add(new UserModel(R.drawable.cube, "Văn Huấn", "Online 1h trước"));
        userModelList.add(new UserModel(R.drawable.cube, "Hoàng Sơn", "Online"));

        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(new ContactsAdapter(userModelList));

    }
}