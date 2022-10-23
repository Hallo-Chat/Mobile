package nhom1.cnm.hallochat.view;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.EditText;

import nhom1.cnm.hallochat.R;

public class AddContactActivity extends AppCompatActivity {

    private EditText edMail;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_contact);

        initClick();

    }

    private void initClick() {
        findViewById(R.id.btn_back).setOnClickListener(view -> finish());
    }

}